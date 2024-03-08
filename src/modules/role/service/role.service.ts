
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleService {
  private roles = [];

  create(role) {
    this.roles.push(role);
  }

  findAll() {
    return this.roles;
  }

  update(id: number, role: any) {
    this.roles[id] = role;
  }

  delete(id: number) {
    this.roles = this.roles.filter((_, i) => i !== id);
  }
}
