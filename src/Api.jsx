export const URL_API = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    url: URL_API + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
} 

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: URL_API + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

export function USER_GET (token){
  return {
    url: URL_API + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

export function USER_POST(body) {
  return {
    url: URL_API + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
} 

export function PHOTO_POST(formData, token) {
  return {
    url: URL_API + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token
      },
      body: formData
    }
  }
}

export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${URL_API}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function PHOTO_GET(id) {
  return {
    url: `${URL_API}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function COMMENT_POST(id, body, tokenUser) {
  return {
    url: `${URL_API}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenUser,
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_DELETE(id, tokenUser) {
  return {
    url: `${URL_API}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + tokenUser,
      },
    },
  };
}

export function LOST_PASSWORD (body) {
  return {
    url: URL_API + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function RESET_PASSWORD(body) {
  return {
    url: URL_API + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_STATS(token) {
  return {
    url: URL_API + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      },
    },
  };
}