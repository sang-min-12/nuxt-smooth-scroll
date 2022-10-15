<script setup lang="ts">
import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate';
import { required, between, confirmed } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import pl from '@vee-validate/i18n/dist/locale/pl.json';

// define global rules
defineRule('required', required);
defineRule('between', between);
defineRule('confirmed', confirmed);

localize({ pl });

// Activate the locale
configure({
  generateMessage: localize('pl', {
    names: {
      name: 'imię',
      age: 'السن',
      ageConfirm: 'تأكيد السن',
    },
  }),
});

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>

<template>
  <Form @submit="onSubmit">
    <label for="name">اسمك</label>
    <Field name="name" type="text" rules="required" />
    <ErrorMessage name="name" />

    <label for="name">العمر</label>
    <Field name="age" type="number" rules="required|between:18,96" />
    <ErrorMessage name="age" />

    <label for="name">تأكيد العمر</label>
    <Field name="ageConfirm" type="number" rules="required|confirmed:@age" />
    <ErrorMessage name="ageConfirm" />

    <button>ارسال</button>
  </Form>
</template>

<style scoped>
span,
button {
  display: block;
  margin: 10px 0;
}

label {
  display: block;
}
</style>
