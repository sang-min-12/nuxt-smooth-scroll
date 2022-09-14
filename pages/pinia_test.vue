<template>
<div>

    <h1> Fetch Api Data</h1>
    <div v-for="(item, index) in users" :key="index">
{{item.id}}
{{JSON.stringify(data)}}
    </div>
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
      'https://reqres.in/api/users',
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

const {data,error} = await useAsyncData< Array <User>>("https://reqres.in/api/users/3");
const users:Array<User> = data.value; 

</script>
