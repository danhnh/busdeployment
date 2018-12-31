import React, { Component } from 'react';
import logo from './assets/acbLogoBlue.png';
import logoWhite from './assets/acbLogoWhite.png';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Select from 'react-select';
import Snackbar from '@material-ui/core/Snackbar';
import { OauthSender, OauthReceiver } from 'react-oauth-flow';
import firebase from 'firebase';
import LoadingScreen from 'react-loading-screen';

import './App.css';

//For testing
// const clientId = "F3tSSYr2nCqndlGTrbWug";
// const url = 'http://localhost:5000';

//For production
const clientId = "0JqrtQdnp8sRHVr2pxx0dA";
const url = 'https://trienkhaikinhdoanh-acb.azurewebsites.net/';

const urlToken = `${url}/oauth2/token`;

let config = {
  apiKey: "AIzaSyDpn4qBYUHJINdRDnQTH32XWEWRVrD7Htc",
  authDomain: "acbevents-8e7f8.firebaseapp.com",
  databaseURL: "https://acbevents-8e7f8.firebaseio.com",
  projectId: "acbevents-8e7f8",
  storageBucket: "",
  messagingSenderId: "72653524490"
};

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',
  fontSize: 14,

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: null,
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white', width: '100%' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: '#ffffff',
      color: 'black',
      cursor: 'default',
      fontSize: 14,
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      step: 0,
      registrationInfo: {
        willJoin: true,
        transportationDeparture: null,
        transportationArrive: null,
        location: null,
      },
      eventTimelineData: [],
      reason: "",
      cmnd: "",
      completed: false,
      flex: 'column'
    }
  }

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.getRegistryData();
  }

  handleSuccess = async (accessToken, { response, state }) => {
    this.setState({
      isLoading: true
    })
    let yammerAcc = response.user;
    let id = yammerAcc.id;

    //Check added members. If exist, update user info. If not, notify to user
    let membersRef = firebase.database().ref('Topics/BusinessDeployment/Events/2019/members');
    membersRef.orderByChild('email').equalTo(response.user.email).once('value').then(snapshot => {
      if (snapshot.exists()) {
        let key = Object.keys(snapshot.val())[0];
        let updateData = {};
        updateData.key = key;
        updateData.id = id;
        updateData.full_name = response.user.full_name;
        updateData.updated_full_name = snapshot.child(key).val().updated_full_name;
        updateData.job_title = response.user.job_title;
        updateData.department = response.user.department;
        updateData.mugshot_url = response.user.mugshot_url.replace("48x48", "500x500");
        updateData.email = response.user.email;
        updateData.phoneNumber = response.user.contact.phone_numbers[0].number;
        firebase.database().ref(`Topics/BusinessDeployment/Events/2019/members/${key}`).update(updateData).then((data) => {
          this.setState({
            ...this.state,
            isLoading: false,
            userInfo: updateData,
            step: 1
          }, () => {
            this.getRegisteredInfo();
          })
        }).catch((error) => {
        });
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 1000);
      } else {
        this.setState({
          ...this.state,
          isLoading: false,
          errorMessage: 'Bạn không nằm trong danh sách tham dự sự kiện',
          showError: true
        })
      }
    })
  };

  getTransporationTypes() {
    firebase.database().ref('TransportationTypeArriveTypes').once('value').then(snapshot => {
      let transportationTypes = Object.values(snapshot.val());
      let transporationTypesData = [];
      let transporationTypesDataNote = [];
      transportationTypes.forEach((transType) => {
        transporationTypesData.push(transType.name);
        transporationTypesDataNote.push(transType.note);
      });
      this.setState({
        ...this.state,
        transTypesArrive: transporationTypesData,
        transTypesArriveNote: transporationTypesDataNote
      })
    });

    firebase.database().ref('TransportationTypeDepartureTypes').once('value').then(snapshot => {
      let transportationTypes = Object.values(snapshot.val());
      let transporationTypesData = [];
      let transporationTypesDataNote = [];
      transportationTypes.forEach((transType) => {
        transporationTypesData.push(transType.name);
        transporationTypesDataNote.push(transType.note);
      });
      this.setState({
        ...this.state,
        transTypesDeparture: transporationTypesData,
        transTypesDepartureNote: transporationTypesDataNote
      })
    });
  }

  getLocations() {
    firebase.database().ref('Locations').once('value').then(snapshot => {
      let locationsData = Object.values(snapshot.val());
      let locations = [];
      locationsData.forEach((locationData) => {
        locations.push(locationData.name);
      });
      this.setState({
        locations: locations
      })
    });
  }

  getEventUsersAndSchedules() {
    firebase.database().ref(`Topics/BusinessDeployment/Events/2019`).once('value').then(snapshot => {
      let users = snapshot.val().members;
      let userArr = Object.values(users);
      let usersData = [];
      for (let i = 0; i < userArr.length; i++) {
        usersData.push({
          value: userArr[i].updated_full_name,
          label: userArr[i].updated_full_name,
          email: userArr[i].email,
          mugshot_url: userArr[i].mugshot_url
        });
      }

      let stayings = snapshot.val().staySchedules;
      let stayingArr = Object.values(stayings);
      let staySchedules = [];
      for (let i = 0; i < stayingArr.length; i++) {
        staySchedules.push({
          id: i,
          name: stayingArr[i].name,
          checked: false
        });
      }

      let eatings = snapshot.val().eatSchedules;
      let eatingArr = Object.values(eatings);
      let eatSchedules = [];
      for (let i = 0; i < eatingArr.length; i++) {
        eatSchedules.push({
          id: i,
          name: eatingArr[i].name,
          checked: false
        });
      }

      this.setState({
        ...this.state,
        eventUsers: usersData,
        eatSchedules: eatSchedules,
        staySchedules: staySchedules
      }, () => {
        this.getEventDetails();
      })
    })
  }

  getRegisteredInfo() {
    firebase.database().ref(`Topics/BusinessDeployment/Events/2019/members`).orderByChild('email').equalTo(this.state.userInfo.email).once('value').then(snapshot => {
      let key = Object.keys(snapshot.val())[0];
      if (snapshot.child(key).hasChild('registered')) {
        this.setState({
          ...this.state,
          registrationInfo: {
            willJoin: snapshot.child(key).val().registered,
            transportationDeparture: snapshot.child(key).val().transportationDeparture,
            transportationArrive: snapshot.child(key).val().transportationArrive,
            location: snapshot.child(key).val().location
          },
          staySchedules: snapshot.child(key).val().staySchedules,
          eatSchedules: snapshot.child(key).val().eatSchedules,
          roommateName: snapshot.child(key).val().registered ? snapshot.child(key).val().roommateName : null,
          reason: snapshot.child(key).val().reason,
          cmnd: snapshot.child(key).val().cmnd,
          completed: true
        })
      }
    })
  }

  getRegistryData() {
    this.getEventUsersAndSchedules();
    this.getTransporationTypes();
    this.getLocations();
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  registry = () => {
    if (this.state.registrationInfo.willJoin && (this.state.registrationInfo.transportationDeparture == null || this.state.registrationInfo.transportationArrive === null || this.state.registrationInfo.location === null)) {
      this.setState({
        ...this.state,
        errorMessage: 'Xin vui lòng chọn phương tiện di chuyển đi/về và nơi cư trú hiện tại.',
        showError: true
      })
    } else if (!this.state.registrationInfo.willJoin && this.state.reason === "") {
      this.setState({
        ...this.state,
        errorMessage: 'Xin vui lòng nhập lý do không tham dự sự kiện.',
        showError: true
      })
    } else if (this.state.registrationInfo.willJoin && this.state.cmnd === "") {
      this.setState({
        ...this.state,
        errorMessage: 'Xin vui lòng nhập số CMND / Căn cước.',
        showError: true
      })
    } else if (this.state.registrationInfo.willJoin && this.state.roommate !== undefined && this.state.roommate.value === this.state.userInfo.updated_full_name) {
      this.setState({
        ...this.state,
        errorMessage: 'Vui lòng chọn bạn cùng phòng khác.',
        showError: true
      })
    } else {
      this.setState({
        isLoading: true
      })
      firebase.database().ref(`Topics/BusinessDeployment/Events/2019/members`).orderByChild('email').equalTo(this.state.userInfo.email).once('value').then(snapshot => {
        let key = Object.keys(snapshot.val())[0];
        let updateData = {
          email: this.state.userInfo.email,
          full_name: this.state.userInfo.full_name,
          updated_full_name: this.state.userInfo.updated_full_name,
          job_title: this.state.userInfo.job_title,
          department: this.state.userInfo.department,
          registered: this.state.registrationInfo.willJoin,
          transportationDeparture: this.state.registrationInfo.transportationDeparture,
          transportationArrive: this.state.registrationInfo.transportationArrive,
          location: this.state.registrationInfo.location,
          staySchedules: this.state.registrationInfo.willJoin ? this.state.staySchedules : null,
          eatSchedules: this.state.registrationInfo.willJoin ? this.state.eatSchedules : null,
          roommateName: this.state.registrationInfo.willJoin ? this.state.roommate !== undefined ? this.state.roommate : '' : null,
          reason: this.state.reason ? this.state.reason : null,
          cmnd: this.state.cmnd ? this.state.cmnd : null,
          mugshot_url: this.state.userInfo.mugshot_url
        }
        firebase.database().ref(`Topics/BusinessDeployment/Events/2019/members/${key}`).set(updateData).then(snapshot => {
          this.setState({
            ...this.state,
            isLoading: false,
            completed: true,
            showError: true,
            errorMessage: "Đăng ký thành công"
          })
        })
      });
    }
  }

  getEventDetails = () => {
    firebase.database().ref(`Topics/BusinessDeployment/Events/2019/programDetails`).once('value').then(snapshot => {
      let data = [];
      snapshot.forEach(child => {
        let imageUrl = '';
        if (child.hasChild('email')) {
          let email = child.val().email;
          let memberList = this.state.eventUsers;
          memberList.forEach(user => {
            if (user.email === email) {
              imageUrl = user.mugshot_url.replace("48x48", "500x500");;
            }
          });
        }
        let tempChild = {
          time: child.val().startTime,
          date: child.val().date,
          title: child.val().title,
          description: child.val().host !== "''" ? child.val().host : null,
          allow: child.val().allow,
          key: child.key,
          imageUrl: imageUrl
        }
        data.push(tempChild);
      });

      this.setState({
        ...this.state,
        isLoading: false,
        eventTimelineData: data
      })
    })
  }

  updateDimensions() {
    if (window.innerWidth < 1000) {
      this.setState({ flex: 'column' });
    } else {
      this.setState({ flex: 'row' });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {

    return (
      this.state.isLoading ? <LoadingScreen
        loading={this.state.isLoading}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        text='Xin vui lòng đợi trong giây lát!' /> : this.state.step === 0 ?
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">TRIỂN KHAI KINH DOANH 2019</h1>
              <OauthSender
                authorizeUrl="https://www.yammer.com/oauth2/authorize"
                clientId={clientId}
                redirectUri={url}
                render={({ url }) =>
                  <Button variant="contained" color="primary" href={url} disabled={this.state.isLoading}>
                    ĐĂNG NHẬP
              </Button>}
              />
              <OauthReceiver
                tokenUrl={urlToken}
                onAuthSuccess={this.handleSuccess}
                onAuthError={this.handleError}
              />
            </header>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={this.state.showError}
              autoHideDuration={5000}
              onClose={() => {
                this.setState({
                  showError: false
                })
              }}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">{this.state.errorMessage}</span>}
            />
          </div> :
          <div>
            <div style={{position: 'fixed', bottom: 10, right: 10, zIndex: 10000, flexDirection: 'column', display: 'flex'}}>
              <Fab color="primary" variant="extended" aria-label="Hotline" href="tel:+84918131900">
                Hotline chung
                <br/>
                Vũ Diệu Ly 0918131900
              </Fab>
              <br/>
              <Fab color="secondary" variant="extended" aria-label="Hotline" href="tel:+84779933846">
                Hotline phòng
                <br/>
                Nguyễn Việt An 0779933846
              </Fab>
            </div>
            
            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', backgroundColor: '#072790' }}>
              <img src={logoWhite} style={{ height: 80, marginLeft: 15 }} alt="logo" />
              <span style={{ marginLeft: 20, textTransform: 'uppercase', fontWeight: 700, color: 'white', fontSize: 20 }}>TRIỂN KHAI KINH DOANH 2019</span>
              <Button color="primary" style={{ position: 'absolute', right: 10, color: 'white', fontWeight: 500 }} onClick={() => {
                window.location.reload();
              }}>
                Đăng xuất
              </Button>
            </div>
            <div style={{ padding: 10, display: 'flex', flexDirection: this.state.flex }}>
              <div className="App-form">
                <div style={{ textAlign: 'center', marginTop: 10, height: 120, width: 120, borderRadius: 60, backgroundColor: '#dbdbdb' }}>
                  <Avatar src={this.state.userInfo.mugshot_url} style={{ width: 120, height: 120 }} />
                </div>
                <div style={{ marginTop: 10, color: '#1f419b', fontWeight: 'bold', fontSize: '1rem' }}>
                  {this.state.userInfo.updated_full_name}
                </div>
                <div style={{ marginTop: 10, color: 'black', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  {this.state.userInfo.job_title}
                </div>
                <div style={{ marginTop: 10, color: '#676767', fontSize: '0.9rem' }}>
                  {this.state.userInfo.department}
                </div>
                <FormGroup row style={{ marginTop: 10, marginBottom: 10 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        disabled={this.state.completed}
                        checked={this.state.registrationInfo.willJoin}
                        color="primary"
                        onChange={() => {
                          this.setState({
                            ...this.state,
                            registrationInfo: {
                              ...this.state.registrationInfo,
                              willJoin: !this.state.registrationInfo.willJoin
                            }
                          })
                        }}
                        value={this.state.willJoin}
                      />
                    }
                    label="Xác nhận tham dự" />
                </FormGroup>
                {this.state.registrationInfo.willJoin && (
                  <div>
                    <div style={{ width: '80%' }}>
                      <TextField
                        id="standard-multiline-flexible"
                        label="CMND/Căn cước"
                        disabled={this.state.completed}
                        style={{ marginLeft: 20, marginRight: 20, width: 300 }}
                        value={this.state.cmnd}
                        onChange={this.handleChange('cmnd')}
                        fullWidth
                        margin="normal"
                      />
                    </div>
                    <div style={{ marginLeft: 20, marginTop: 30, width: '100%' }}>
                      <FormControl component="fieldset" style={{ marginRight: 80 }}>
                        <FormLabel component="legend">Nơi lưu trú</FormLabel>
                        <RadioGroup
                          aria-label="Nơi lưu trú:"
                          name="transLocation"
                          value={this.state.registrationInfo ? this.state.registrationInfo.location : ""}
                          onChange={(value) => {
                            this.setState({
                              ...this.state,
                              registrationInfo: {
                                ...this.state.registrationInfo,
                                location: value.target.value
                              }
                            })
                          }}>
                          {!this.state.completed && this.state.locations && this.state.locations.map(type => {
                            return (
                              <FormControlLabel value={type} control={<Radio color="primary" />} label={type} />
                            )
                          })}
                          {this.state.completed && this.state.locations && this.state.locations.map(type => {
                            return (
                              <FormControlLabel disabled value={type} control={<Radio checked={type === this.state.registrationInfo.location} color="primary" />} label={type} />
                            )
                          })}
                        </RadioGroup>
                      </FormControl>
                      <div style={{ marginBottom: 10, color: '#1f419b', width: '90%', fontSize: 13, textAlign: "justify" }}>
                        <span style={{ fontWeight: 'bold' }}>Ghi chú:</span><br />
                        - Anh/chị vui lòng chủ động mua vé máy bay khứ hồi đến TPHCM. Các chi phí sẽ được thanh toán theo quy chế chi tiêu nội bộ <br />
                        - Đối với khu vực TPHCM: Trung Tâm Điều Xe sẽ không giải quyết các trường hợp yêu cầu xe công vụ riêng lẻ và không thanh toán các chi phí phát sinh.
                    </div>
                      <div style={{ width: '90%', height: 1, backgroundColor: 'gray', marginTop: 10, marginBottom: 10 }} />
                      <FormControl component="fieldset" style={{ marginRight: 80 }}>
                        <FormLabel component="legend">Di chuyển chiều đi</FormLabel>
                        <RadioGroup
                          aria-label="Di chuyển chiều đi"
                          name="transTypeDeparture"
                          value={this.state.registrationInfo ? this.state.registrationInfo.transportationDeparture : ""}
                          onChange={(value) => {
                            this.setState({
                              ...this.state,
                              registrationInfo: {
                                ...this.state.registrationInfo,
                                transportationDeparture: value.target.value
                              }
                            })
                          }}>
                          {!this.state.completed && this.state.transTypesDeparture && this.state.transTypesDeparture.map((type, index) => {
                            return (
                              <FormControlLabel value={type} control={<Radio color="primary" />} label={type} />
                            )
                          })}
                          {this.state.completed && this.state.transTypesDeparture && this.state.transTypesDeparture.map(type => {
                            return (
                              <FormControlLabel disabled value={type} control={<Radio checked={type === this.state.registrationInfo.transportationDeparture} color="primary" />} label={type} />
                            )
                          })}
                        </RadioGroup>
                        <div style={{ marginBottom: 20, color: '#1f419b', width: '90%', fontSize: 13, textAlign: "justify" }}>
                          <span style={{ fontWeight: 'bold' }}>Ghi chú:</span><br />
                          - Xe sẽ đón/trả đoàn tại <span style={{ fontWeight: 'bold' }}>Cung Văn Hoá Lao Động - 55B Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1, TPHCM</span>
                        </div>
                      </FormControl>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Di chuyển chiều về</FormLabel>
                        <RadioGroup
                          aria-label="Chọn phương thức di chuyển chiều về"
                          name="transTypeArrive"
                          value={this.state.registrationInfo ? this.state.registrationInfo.transportationArrive : ""}
                          onChange={(value) => {
                            this.setState({
                              ...this.state,
                              registrationInfo: {
                                ...this.state.registrationInfo,
                                transportationArrive: value.target.value
                              }
                            })
                          }}>
                          {!this.state.completed && this.state.transTypesArrive && this.state.transTypesArrive.map(type => {
                            return (
                              <FormControlLabel value={type} control={<Radio color="primary" />} label={type} />
                            )
                          })}
                          {this.state.completed && this.state.transTypesArrive && this.state.transTypesArrive.map(type => {
                            return (
                              <FormControlLabel disabled value={type} control={<Radio checked={type === this.state.registrationInfo.transportationArrive} color="primary" />} label={type} />
                            )
                          })}
                        </RadioGroup>
                        <div style={{ marginBottom: 10, color: '#1f419b', width: '90%', fontSize: 13, textAlign: "justify" }}>
                          <span style={{ fontWeight: 'bold' }}>Ghi chú:</span><br />
                          - Thời gian khởi hành từ sau 12:00 đến 14:00 (linh động khi đủ số lượng khách trên xe)
                      </div>
                      </FormControl>
                    </div>
                    <div style={{ marginLeft: 20, width: '90%', height: 1, backgroundColor: 'gray', marginTop: 10, marginBottom: 10 }} />
                    <FormControl component="fieldset" style={{ marginLeft: 20, marginTop: 10, width: '90%' }}>
                      <FormLabel component="legend">Xác nhận lưu trú</FormLabel>
                      <div style={{ marginTop: 10, marginBottom: 10, color: '#1f419b', width: '90%', fontSize: 13, textAlign: "justify" }}>
                        - Thời gian nhận phòng: sau 15h Thứ Sáu 18/01/2019 <br />
                        - Thời gian trả phòng: trước 12h Chủ Nhật 19/01/2019
                      </div>
                      <FormGroup>
                        {this.state.staySchedules.map((stay, index) => {
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox disabled={this.state.completed} checked={stay.checked} onChange={() => {
                                  let staySchedules = this.state.staySchedules;
                                  staySchedules[index].checked = !staySchedules[index].checked;
                                  this.setState({
                                    staySchedules: staySchedules
                                  })
                                }} value={stay.name} color="primary" />
                              }
                              label={stay.name}
                            />
                          )
                        })}
                      </FormGroup>
                    </FormControl>
                    <div style={{ marginLeft: 20, marginTop: 10, width: '100%', flexDirection: 'row' }}>
                      <div style={{ marginTop: 20, marginBottom: 20, width: 300 }}>
                        <Select
                          isDisabled={this.state.completed}
                          value={this.state.roommate}
                          onChange={(selectedOption) => {
                            this.setState({
                              roommate: selectedOption
                            })
                          }}
                          options={this.state.eventUsers}
                          isSearchable={true}
                          styles={colourStyles}
                          placeholder="Chọn bạn cùng phòng" />
                      </div>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Đăng ký bữa ăn</FormLabel>
                        <FormGroup>
                          {this.state.eatSchedules.map((eat, index) => {
                            return (
                              <FormControlLabel
                                control={
                                  <Checkbox disabled={this.state.completed} checked={eat.checked} onChange={() => {
                                    let eatSchedules = this.state.eatSchedules;
                                    eatSchedules[index].checked = !eatSchedules[index].checked;
                                    this.setState({
                                      eatSchedules: eatSchedules
                                    })
                                  }} value={eat.checked} color="primary" />
                                }
                                label={eat.name}
                              />
                            )
                          })}
                        </FormGroup>
                      </FormControl>
                    </div>
                  </div>
                )}
                {!this.state.registrationInfo.willJoin && (
                  <div style={{ width: 400 }}>
                    <TextField
                      id="standard-multiline-flexible-more"
                      label="Lý do từ chối"
                      multiline
                      disabled={this.state.completed}
                      value={this.state.reason}
                      onChange={this.handleChange('reason')}
                      fullWidth
                      margin="normal"
                    />
                  </div>
                )}
                {!this.state.completed && <div style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', flexDirection: 'column' }}>
                  <Button variant="contained" color='primary' size='large' onClick={this.registry}>
                    ĐĂNG KÝ
                </Button>
                  {this.state.showError && <div className="App-error">
                    <span>{this.state.errorMessage}</span>
                  </div>}
                </div>}
              </div>
              <div style={{ flex: 2, backgroundColor: '#f7f7f7', margin: 10 }}>
                <VerticalTimeline>
                  {this.state.eventTimelineData.map((event, index) => {
                    return (
                      <VerticalTimelineElement
                        className="vertical-timeline-element-work"
                        date={`${event.date}\n${event.time}`}
                        iconStyle={{ background: index % 2 === 0 ? '#1f419b' : 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<Avatar src={event.imageUrl} style={event.imageUrl !== '' ? { width: '100%', height: '100%' } : { width: '0%' }} />}>
                        <h3 className="vertical-timeline-element-title">{event.title}</h3>
                        <p>
                          {event.description}
                        </p>
                      </VerticalTimelineElement>
                    )
                  })}
                </VerticalTimeline>
              </div>
              <Snackbar
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={this.state.showError}
                autoHideDuration={5000}
                onClose={() => {
                  this.setState({
                    showError: false
                  })
                }}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{this.state.errorMessage}</span>}
              />
            </div>

          </div>
    );
  }
}

export default App;
