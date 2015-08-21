'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  // classes
  createClass: {
    method: 'post',
    url: 'classes/{{className}}'
  },
  classes: {
    method: 'get',
    url: 'classes/{{className}}'
  },
  fetchObject: {
    method: 'get',
    url: 'classes/{{className}}/{{objectId}}'
  },
  updateObject: {
    method: 'put',
    url: 'classes/{{className}}/{{objectId}}'
  },
  // users
  signup: {
    method: 'post',
    url: 'users'
  },
  signByPhone: {
    method: 'post',
    url: 'usersByMobilePhone'
  },
  signin: {
    url: 'login'
  },
  login: {
    url: 'login'
  },
  user: {
    url: 'users/{{objectId}}'
  },
  users: {
    url: 'users'
  },
  updatePassword: {
    method: 'put',
    url: 'users/{{objectId}}/updatePassword'
  },
  updateUser: {
    method: 'put',
    url: 'users/{{objectId}}'
  },
  removeUser: {
    method: 'delete',
    url: 'users/{{objectId}}'
  },
  requestPasswordReset: {
    method: 'post',
    url: 'requestPasswordReset'
  },
  requestEmailVerify: {
    method: 'post',
    url: 'requestEmailVerify'
  },
  requestMobilePhoneVerify: {
    method: 'post',
    url: 'requestMobilePhoneVerify'
  },
  verifyMobilePhone: {
    method: 'post',
    url: 'verifyMobilePhone/{{code}}'
  },
  requestLoginSmsCode: {
    method: 'post',
    url: 'requestLoginSmsCode'
  },
  requestPasswordResetBySmsCode: {
    method: 'post',
    url: 'requestPasswordResetBySmsCode'
  },
  resetPasswordBySmsCode: {
    method: 'put',
    url: 'resetPasswordBySmsCode'
  },
  // roles
  role: {
    url: 'roles/{{objectId}}'
  },
  roles: {
    url: 'roles'
  },
  createRole: {
    method: 'post',
    url: 'roles'
  },
  updateRole: {
    method: 'put',
    url: 'roles/{{objectId}}'
  },
  removeRole: {
    method: 'delete',
    url: 'roles/{{objectId}}'
  },
  // Push
  push: {
    method: 'post',
    url: 'push'
  },
  // Installations
  createInstallation: {
    method: 'post',
    url: 'installations'
  },
  installation: {
    url: 'installations/{{objectId}}'
  },
  installations: {
    url: 'installations'
  },
  updateInstallation: {
    method: 'put',
    url: 'installations/{{objectId}}'
  },
  removeInstallation: {
    method: 'delete',
    url: 'installations/{{objectId}}'
  },
  // functions
  callFunction: {
    method: 'post',
    url: 'functions'
  },
  // feedback
  createFeedback: {
    method: 'post',
    url: 'feedback'
  },
  // states
  stats: {
    url: 'stats/{{type}}'
  },
  // rtm
  createMessage: {
    method: 'post',
    url: 'rtm/messages'
  },
  historyMessages: {
    url: 'rtm/messages/logs'
  },
  onlines: {
    url: 'rtm/transient_group/onlines'
  }
};
module.exports = exports['default'];
//# sourceMappingURL=api.js.map