<template>
  <Form>
    <Field name="password" type="password" :rules="passwordRules" />
    <ErrorMessage name="password" />
  </Form>
</template>
<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
const passwordRules = yup.string().required().min(8);
</script>