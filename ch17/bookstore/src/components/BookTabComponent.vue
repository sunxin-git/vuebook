<template>
  <div class="tabComponent">
    <button
      v-for="tab in tabs"
      :key="tab.title"
      :class="['tab-button', { active: currentTab === tab.title }]"
      @click="currentTab = tab.title">
      {{ tab.displayName }}
    </button>

    <keep-alive>
      <component :is="currentTabComponent" :content="content" class="tab"></component>
    </keep-alive>
  </div>
</template>

<script>
  import BookIntroduction from './BookIntroduction'
  export default {
    name:'TabComponent',
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        currentTab: 'introduction',
        tabs: [
          {title: 'introduction', displayName: '图书介绍'}, 
          {title: 'comment', displayName: '图书评价'},
          {title: 'qa', displayName: '图书问答'}
        ]
      };
    },

    components: {
      BookIntroduction,
      'BookComment' : () => import('./BookCommentList'),
      'BookQa' : () => import('./BookQA') 
    },

    computed: {
      currentTabComponent: function () {
        return 'book-' + this.currentTab
      }
    }
  }
</script>
<style scoped>
.tabComponent{
  float: left;
  width: 100%;
  text-align: left;
  margin-left: 80px;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: solid 1px #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #cdcdcd;
}
.tab {
  border: solid 1px #ccc;
  padding: 10px;
}
</style>