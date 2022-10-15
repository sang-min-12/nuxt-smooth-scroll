<template>
  <Form>
    <Field name="password" type="password" :rules="passwordRules" />
    <ErrorMessage name="password" />
  </Form>
</template>
<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

const passwordRules = yup.string().required().min(8);


// Define the rule globally
defineRule('required', required);
configure({
  generateMessage: localize({
    en: {
      messages: {
        required: 'This field is requiredeeee',
      },
    },
    ar: {
      messages: {
        required: 'هذا الحقل مطلوب',
      },
    },
  }),
});

</script>