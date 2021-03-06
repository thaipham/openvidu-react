var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import './StreamComponent.css';
import OvVideoComponent from './OvVideo';

import MicOff from '@material-ui/icons/MicOff';
import VideocamOff from '@material-ui/icons/VideocamOff';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import HighlightOff from '@material-ui/icons/HighlightOff';
import FormHelperText from '@material-ui/core/FormHelperText';

var StreamComponent = function (_Component) {
    _inherits(StreamComponent, _Component);

    function StreamComponent(props) {
        _classCallCheck(this, StreamComponent);

        var _this = _possibleConstructorReturn(this, (StreamComponent.__proto__ || Object.getPrototypeOf(StreamComponent)).call(this, props));

        _this.state = { nickname: _this.props.user.getNickname(), showForm: false, mutedSound: false, isFormValid: true };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handlePressKey = _this.handlePressKey.bind(_this);
        _this.toggleNicknameForm = _this.toggleNicknameForm.bind(_this);
        _this.toggleSound = _this.toggleSound.bind(_this);
        return _this;
    }

    _createClass(StreamComponent, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ nickname: event.target.value });
            event.preventDefault();
        }
    }, {
        key: 'toggleNicknameForm',
        value: function toggleNicknameForm() {
            if (this.props.user.isLocal()) {
                this.setState({ showForm: !this.state.showForm });
            }
        }
    }, {
        key: 'toggleSound',
        value: function toggleSound() {
            this.setState({ mutedSound: !this.state.mutedSound });
        }
    }, {
        key: 'handlePressKey',
        value: function handlePressKey(event) {
            if (event.key === 'Enter') {
                console.log(this.state.nickname);
                if (this.state.nickname.length >= 3 && this.state.nickname.length <= 20) {
                    this.props.handleNickname(this.state.nickname);
                    this.toggleNicknameForm();
                    this.setState({ isFormValid: true });
                } else {
                    this.setState({ isFormValid: false });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'OT_widget-container' },
                React.createElement(
                    'div',
                    { className: 'pointer nickname' },
                    this.state.showForm ? React.createElement(
                        FormControl,
                        { id: 'nicknameForm' },
                        React.createElement(
                            IconButton,
                            { color: 'inherit', id: 'closeButton', onClick: this.toggleNicknameForm },
                            React.createElement(HighlightOff, null)
                        ),
                        React.createElement(
                            InputLabel,
                            { htmlFor: 'name-simple', id: 'label' },
                            'Nickname'
                        ),
                        React.createElement(Input, {
                            color: 'inherit',
                            id: 'input',
                            value: this.state.nickname,
                            onChange: this.handleChange,
                            onKeyPress: this.handlePressKey,
                            required: true
                        }),
                        !this.state.isFormValid && this.state.nickname.length <= 3 && React.createElement(
                            FormHelperText,
                            { id: 'name-error-text' },
                            'Nickname is too short!'
                        ),
                        !this.state.isFormValid && this.state.nickname.length >= 20 && React.createElement(
                            FormHelperText,
                            { id: 'name-error-text' },
                            'Nickname is too long!'
                        )
                    ) : React.createElement(
                        'div',
                        { onClick: this.toggleNicknameForm },
                        React.createElement(
                            'span',
                            { id: 'nickname' },
                            this.props.user.getNickname()
                        ),
                        this.props.user.isLocal() && React.createElement(
                            'span',
                            null,
                            ' (edit)'
                        )
                    )
                ),
                this.props.user !== undefined && this.props.user.getStreamManager() !== undefined ? React.createElement(
                    'div',
                    { className: 'streamComponent' },
                    React.createElement(OvVideoComponent, { user: this.props.user, mutedSound: this.state.mutedSound }),
                    React.createElement(
                        'div',
                        { id: 'statusIcons' },
                        !this.props.user.isVideoActive() ? React.createElement(
                            'div',
                            { id: 'camIcon' },
                            React.createElement(VideocamOff, { id: 'statusCam' })
                        ) : null,
                        !this.props.user.isAudioActive() ? React.createElement(
                            'div',
                            { id: 'micIcon' },
                            React.createElement(MicOff, { id: 'statusMic' })
                        ) : null
                    ),
                    React.createElement(
                        'div',
                        null,
                        !this.props.user.isLocal() && React.createElement(
                            IconButton,
                            { id: 'volumeButton', onClick: this.toggleSound },
                            this.state.mutedSound ? React.createElement(VolumeOff, { color: 'secondary' }) : React.createElement(VolumeUp, null)
                        )
                    )
                ) : null
            );
        }
    }]);

    return StreamComponent;
}(Component);

export default StreamComponent;