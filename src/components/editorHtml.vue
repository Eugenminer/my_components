<template>
<html_editor>
<buttons>
  <div style="float: left;">
    <button :class="buttonHTMLClass" title="Переключить редактор HTML/TEXT">HTML</button>
  </div>
</buttons>
<div style="float: right;">
  <buttons>
    <button :class="buttonBoldClass" title="Жирный шрифт">Ж</button>
    <button :class="buttonItalicClass" title="Курсив">K</button>
    <button :class="buttonUnderlineClass" title="Подчеркивание">Ч</button>
    <button :class="buttonLineThroughClass" title="Зачеркивание">T</button>
  </buttons>
  <buttons>
    <button class="button off bold" title="Шрифт больше"
      @click="currentFontSize =+ 10;">&and;</button>
    <button class="button off bold" title="Шрифт меньше"
      @click="currentFontSize =- 10;">&or;</button>
    <button class="button size" title="Размер шрифта">{{currentFontSize}}%</button>
  </buttons>
  <buttons>
    <label for="col">
      <input id="col" type="color" list class="button color"
      v-model="this.currentFontColor" title="Цвет текста" />
    </label>
    <label for="bCol">
      <input id="bCol" type="color" list class="button color"
      v-model="currentBackgroundColor" title="Цвет фона"/>
    </label>
  </buttons>
  <buttons>
    <button class="button off bold" title="Добавить ссылку">&lt;a&gt;</button>
    <button class="button off" title="Добавить изображение">🍱</button>
  </buttons>
</div>

<fields>
  <div class="field focused">
    <span class="bold">h</span>
    <span class="bold">e</span>
    <span class="underline cursor">l</span>
    <span class="underline">l</span>
    <span class="line-through">l</span>
    <span class="line-through">l</span>
    <span class="line-through">o</span>
    <span class="line-through">&nbsp;</span>
    <span class="line-through">w</span>
    <span class="line-through">o</span>
    <span class="">r</span>
    <span class="">l</span>
    <span class="italic">d</span>
    <span class="italic">d</span>
    <span class="italic">d</span>
  </div>
  <label for="taField">
    <textarea id="taField" class="field" ></textarea>
  </label>
</fields>

</html_editor>
</template>

<script>
import '@/styles/heditor.scss';

export default {
  components: {

  },
  props: [],
  watch: {

  },
  data() {
    return {
      currentHtmlEditor: true,
      currentBold: true,
      currentItalic: true,
      currentUnderline: true,
      currentLineThrough: true,
      currentFontSize: 100,
      currentFontColor: '#000000',
      currentBackgroundColor: '#ffffff',
    };
  },
  methods: {

  },
  computed: {
    buttonHTMLClass() {
      return this.currentHtmlEditor ? 'button bold on' : 'button bold';
    },
    buttonBoldClass() {
      return this.currentBold ? 'button bold on' : 'button bold';
    },
    buttonItalicClass() {
      return this.currentItalic ? 'button italic on' : 'button italic';
    },
    buttonUnderlineClass() {
      return this.currentUnderline ? 'button underline on' : 'button underline';
    },
    buttonLineThroughClass() {
      return this.currentLineThrough ? 'button line-through on' : 'button line-through';
    },
  },
  created() {

  },
};
</script>
