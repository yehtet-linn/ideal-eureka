import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Jackson Bili',
      email: 'jackson.bili@example.com',
      role: 'Engineer',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah.smith@example.com',
      role: 'Admin',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      role: 'Developer',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'Engineer',
    },
    {
      id: 5,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
    },
    {
      id: 6,
      name: 'Amanda Wilson',
      email: 'amanda.wilson@example.com',
      role: 'Developer',
    },
    {
      id: 7,
      name: 'Daniel Brown',
      email: 'daniel.brown@example.com',
      role: 'Engineer',
    },
    {
      id: 8,
      name: 'Jennifer Lee',
      email: 'jennifer.lee@example.com',
      role: 'Admin',
    },
    {
      id: 9,
      name: 'Matthew Taylor',
      email: 'matthew.taylor@example.com',
      role: 'Developer',
    },
    {
      id: 10,
      name: 'Emma Martinez',
      email: 'emma.martinez@example.com',
      role: 'Engineer',
    },
  ];

  findAll(role?: 'Admin' | 'Engineer' | 'Developer') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0)
        throw new NotFoundException('Not Found User Role(s)');
      return rolesArray;
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('Not Found User');

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const userHighOrder = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userHighOrder[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);

    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }

      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removeUser;
  }
}
