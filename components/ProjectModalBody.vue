<template>
  <div>
    <div class="body-wrapper">
      <div class="nested-wrapper-sm">
        <div align="center">
          <img class="img-modal-project" :src="project.image" :alt="project.alt"/>
        </div>
        <div>
          <p><b>Language: &nbsp;</b> {{project.tech}}</p>
        </div>
        <div>
          <p><b>Duration:&nbsp;</b>
            <small>2017 - Present</small>
          </p>
        </div>
      </div>
      <div class="nested-wrapper">
        <div><b>Language: &nbsp;</b><br/>{{project.name}}</div>
        <div><b>Contribution: &nbsp;</b><br/>{{project.contrib}}</div>
        <div><b>Description: &nbsp;</b><br/>{{project.description}}</div>
        <div><b>Link: &nbsp;</b><a :href="project.url" :alt="project.alt">Try</a></div>
      </div>
    </div>
    <div align="right">
      <b-btn variant="outline-danger" @click="toggleModal"><i class="fa fa-cross"></i>Close</b-btn>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['toggleModal', 'project'],
    data() {
      return {}
    }
  }
</script>

<style scoped>

  .img-modal-project {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    border-radius: 2em;
    cursor: pointer;
  }

  .body-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: 1em;
    margin: 2em;
  }

  .body-wrapper > div {
    /*background-color: red;*/

  }

  .nested-wrapper {
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: 1fr;
    grid-gap: 0.5em;
    background-color: #f2f2f2;
    border-radius: 2em;
    padding: 1em;
  }

  .nested-wrapper > div {
    /*background-color: #8fa6ff;*/
    overflow: hidden;
    overflow-wrap: break-word;
    text-align: justify;
  }

  .nested-wrapper-sm {
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: 1fr;
    grid-gap: 0.5em;
    background-color: #f2f2f2;
    border-radius: 2em;
    padding: 1em;

  }

  .nested-wrapper-sm > div {
    /*background-color: #70ff21;*/
    overflow: hidden;
    overflow-wrap: break-word;
  }

  @media (min-width: 995px) {
    .body-wrapper {
      grid-template-rows: 1fr;
      grid-template-columns: 3fr 9fr;
    }

    .nested-wrapper-sm {
      grid-template-rows: 4fr 3fr 3fr;
    }

  }
</style>
