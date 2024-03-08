import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [];
    
    create(users) {
        this.users.push(users);
    }
   
    findAll() {
        return this.users;
    }
    update(id: number, users: any) {
        this.users[id] = users;
    }

    delete(id: number) {
        this.users = this.users.filter((_, i) => i !== id);
    }
}
