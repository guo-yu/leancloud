import Sign from 'avoscloud-sign'

export default function({appId, appKey, masterKey}) {
  const headers = {
    'X-AVOSCloud-Application-Id': appId,
    'X-AVOSCloud-Request-Sign': () => masterKey ? Sign(masterKey, true) : Sign(appKey)
  }

  return {
    all: {
      headers
    }
  }
}