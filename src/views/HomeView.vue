<script setup lang="ts">
import Slides from '@/components/Slides.vue'
import Slide from '@/components/Slide.vue'
</script>

<template>
  <Slides>
    <Slide class="text-center"
      >Mais pourquoi autant de DevTools quand seulement quelques-uns suffisent ?</Slide
    >
    <Slide>
      <p>Une énième mise à jour de Chrome et son lot de DevTools qui vont avec.</p>
      <p>Des outils encore jamais utilisés ou inutiles dans mon projet ?</p>
      <p>Des onglets avec des graph et des tableaux incompréhensibles…</p>
      <p>
        Autant de fonctionnalités farfelues mais qui, une fois maitrisées, pourront changer votre
        vision du développement front.
      </p>
    </Slide>
    <Slide class="text-center">
      <p>
        A travers ce tutoriel, nous allons voir en détail comment améliorer votre expérience
        développeur avec Chrome DevTools
      </p>
      <p>Vous découvrirez des fonctionnalités que pourrez utiliser au quotidien avec efficacité.</p>
      <p>
        Apprenez à jouer avec la console de développeur pour mettre l’application dans tous ses
        états !
      </p>
    </Slide>
    <Slide class="text-center">
      <p>Nous verrons comment fonctionnent les onglets les moins utilisés comme Performance.</p>
      <p>Nous ferons un tour du côté de lighthouse pour un SEO optimal.</p>
      <p>
        Nous rentrerons dans le détail pour ceux que vous connaissez déjà : debug, fichiers source,
        breakpoints, ou encore réseau.
      </p>
    </Slide>
  </Slides>
</template>

<style scoped>
div {
  padding: 0 40px;
}
p {
  margin-bottom: 20px;
  text-align: center;
}
</style>
