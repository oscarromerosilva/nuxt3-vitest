<template>
  <nav class="is-primary panel">
    <div class="panel-tabs is-flex is-justify-content-space-around">
      <NuxtLink link-test="home" to="/" class="p-0">
        <button class="button is-white">Home</button>
      </NuxtLink>
      <NuxtLink link-test="services" to="/services" class="p-0">
        <button class="button is-white">Services</button>
      </NuxtLink>
      <NuxtLink link-test="aboutUs" to="/aboutUs" class="p-0">
        <button class="button is-white">AboutUs</button>
      </NuxtLink>
    </div>
  </nav>
</template>
