<template>
  <LNB />
  <RNB />
  <GlobalBanner />
  <Header />
  <Billboard />
  <section
    v-for="section in sections"
    :key="section"
    :ref="setRefs">
    <div class="inner">
      <h1>{{ section }}</h1>
    </div>
  </section>
</template>

<script>
import LNB from "@/components/LNB";
import Header from "@/components/Header";
import RNB from "@/components/RNB";
import Billboard from "@/components/Billboard";
import GlobalBanner from "@/components/GlobalBanner";

export default {
  name: "App",
  components: {
    GlobalBanner,
    Billboard,
    RNB,
    LNB,
    Header
  },
  data() {
    return {
      sections: [
        '타임딜',
        '긴급공수',
        '11번가 베스트',
        '오늘의 찬스',
        '추천 기획전',
        '11번가 Only',
        '해외직구',
        'MD추천'
      ],
      sectionEls: []
    }
  },
  mounted() {


    this.sectionEls.forEach((sectionEl, index) => {
      if (index % 2) {
        this.$lazyLoad(sectionEl);
      } else {
        this.$lazyLoad(sectionEl, 'animate__flash');
      }
    });
  },
  methods: {
    setRefs(element) {
      this.sectionEls.push(element);
    }
  }
}
</script>

<style lang="scss">
@import "scss/main";

section {
  border-bottom: 1px solid rgba(#000, 0.2);

  .inner {
    height: 500px;
    padding: 30px 0;

    h1 {
      font-size: 25px;
      font-weight: 700;
    }
  }

}
</style>
