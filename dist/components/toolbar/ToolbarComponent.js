var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import './ToolbarComponent.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Mic from '@material-ui/icons/Mic';
import MicOff from '@material-ui/icons/MicOff';
import Videocam from '@material-ui/icons/Videocam';
import VideocamOff from '@material-ui/icons/VideocamOff';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';
import PictureInPicture from '@material-ui/icons/PictureInPicture';
import ScreenShare from '@material-ui/icons/ScreenShare';
import StopScreenShare from '@material-ui/icons/StopScreenShare';
import Tooltip from '@material-ui/core/Tooltip';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';

import IconButton from '@material-ui/core/IconButton';

var ToolbarComponent = function (_Component) {
    _inherits(ToolbarComponent, _Component);

    function ToolbarComponent(props) {
        _classCallCheck(this, ToolbarComponent);

        var _this = _possibleConstructorReturn(this, (ToolbarComponent.__proto__ || Object.getPrototypeOf(ToolbarComponent)).call(this, props));

        _this.state = { fullscreen: false };
        _this.camStatusChanged = _this.camStatusChanged.bind(_this);
        _this.micStatusChanged = _this.micStatusChanged.bind(_this);
        _this.screenShare = _this.screenShare.bind(_this);
        _this.stopScreenShare = _this.stopScreenShare.bind(_this);
        _this.toggleFullscreen = _this.toggleFullscreen.bind(_this);
        _this.leaveSession = _this.leaveSession.bind(_this);
        _this.toggleChat = _this.toggleChat.bind(_this);
        return _this;
    }

    _createClass(ToolbarComponent, [{
        key: 'micStatusChanged',
        value: function micStatusChanged() {
            this.props.micStatusChanged();
        }
    }, {
        key: 'camStatusChanged',
        value: function camStatusChanged() {
            this.props.camStatusChanged();
        }
    }, {
        key: 'screenShare',
        value: function screenShare() {
            this.props.screenShare();
        }
    }, {
        key: 'stopScreenShare',
        value: function stopScreenShare() {
            this.props.stopScreenShare();
        }
    }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen() {
            this.setState({ fullscreen: !this.state.fullscreen });
            this.props.toggleFullscreen();
        }
    }, {
        key: 'leaveSession',
        value: function leaveSession() {
            this.props.leaveSession();
        }
    }, {
        key: 'toggleChat',
        value: function toggleChat() {
            this.props.toggleChat();
        }
    }, {
        key: 'render',
        value: function render() {
            var mySessionId = this.props.sessionId;
            var localUser = this.props.user;
            return React.createElement(
                AppBar,
                { className: 'toolbar', id: 'headerss' },
                React.createElement(
                    Toolbar,
                    { className: 'toolbar' },
                    React.createElement(
                        'div',
                        { id: 'navSessionInfo' },
                        React.createElement('img', {
                            id: 'header_img',
                            alt: 'OpenVidu Logo',
                            src: 'https://raw.githubusercontent.com/OpenVidu/openvidu-call/master/front/openvidu-call/src/assets/images/openvidu_logo.png'
                        }),
                        this.props.sessionId && React.createElement(
                            'div',
                            { id: 'titleContent' },
                            React.createElement(
                                'span',
                                { id: 'session-title' },
                                mySessionId
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'buttonsContent' },
                        React.createElement(
                            IconButton,
                            { color: 'inherit', className: 'navButton', id: 'navMicButton', onClick: this.micStatusChanged },
                            localUser !== undefined && localUser.isAudioActive() ? React.createElement(Mic, null) : React.createElement(MicOff, { color: 'secondary' })
                        ),
                        React.createElement(
                            IconButton,
                            { color: 'inherit', className: 'navButton', id: 'navCamButton', onClick: this.camStatusChanged },
                            localUser !== undefined && localUser.isVideoActive() ? React.createElement(Videocam, null) : React.createElement(VideocamOff, { color: 'secondary' })
                        ),
                        React.createElement(
                            IconButton,
                            { color: 'inherit', className: 'navButton', onClick: this.screenShare },
                            localUser !== undefined && localUser.isScreenShareActive() ? React.createElement(PictureInPicture, null) : React.createElement(ScreenShare, null)
                        ),
                        localUser !== undefined && localUser.isScreenShareActive() && React.createElement(
                            IconButton,
                            { onClick: this.stopScreenShare, id: 'navScreenButton' },
                            React.createElement(StopScreenShare, { color: 'secondary' })
                        ),
                        React.createElement(
                            IconButton,
                            { color: 'inherit', className: 'navButton', onClick: this.toggleFullscreen },
                            localUser !== undefined && this.state.fullscreen ? React.createElement(FullscreenExit, null) : React.createElement(Fullscreen, null)
                        ),
                        React.createElement(
                            IconButton,
                            { color: 'secondary', className: 'navButton', onClick: this.leaveSession, id: 'navLeaveButton' },
                            React.createElement(PowerSettingsNew, null)
                        ),
                        React.createElement(
                            IconButton,
                            { color: 'inherit', onClick: this.toggleChat, id: 'navChatButton' },
                            this.props.showNotification && React.createElement('div', { id: 'point', className: '' }),
                            React.createElement(
                                Tooltip,
                                { title: 'Chat' },
                                React.createElement(QuestionAnswer, null)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ToolbarComponent;
}(Component);

export default ToolbarComponent;