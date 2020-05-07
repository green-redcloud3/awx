import Base from '../Base';

class Users extends Base {
  constructor(http) {
    super(http);
    this.baseUrl = '/api/v2/users/';
  }

  associateRole(userId, roleId) {
    return this.http.post(`${this.baseUrl}${userId}/roles/`, {
      id: roleId,
    });
  }

  disassociateRole(userId, roleId) {
    return this.http.post(`${this.baseUrl}${userId}/roles/`, {
      id: roleId,
      disassociate: true,
    });
  }

  readOrganizations(userId, params) {
    return this.http.get(`${this.baseUrl}${userId}/organizations/`, {
      params,
    });
  }

  readRoles(userId, params) {
    return this.http.get(`${this.baseUrl}${userId}/roles/`, {
      params
    });
  }

  roleOptions(userId) {
    return this.http.options(`${this.baseUrl}${userId}/roles/`)
  }
}

export default Users;
