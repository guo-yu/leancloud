export default function({appId, appKey, appSign}) {
  const headers = {
    'X-AVOSCloud-Application-Id': appId,
  }

  if (appKey)
    headers['X-AVOSCloud-Application-Key'] = appKey
  if (appSign)
    headers['X-AVOSCloud-Request-Sign'] = appSign

  retrun {
    get: {
      headers
    },
    post: {
      headers
    },
    delete: {
      headers
    },
    put: {
      headers
    }
  }
}