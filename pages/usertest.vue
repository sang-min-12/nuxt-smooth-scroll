<template>
    <div v-for="(user, index) in user" :key="index">
   {{data.id}}
      </div>
 </template>
    
    <script setup lang="ts">
    import axios from 'axios';
    
    interface User {
      id: number;
      email: string;
      first_name: string;
    };
    
    type GetUsersResponse = {
      data: User[];
    };
    
    async function getUsers() {
      try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<GetUsersResponse>(
          'https://reqres.in/api/user/5',
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
       
        console.log(JSON.stringify(data, null, 4));
    
        // 👇️ "response status is: 200"
        console.log('response status is: ', status);
    
        return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }
    getUsers();
    
    </script>