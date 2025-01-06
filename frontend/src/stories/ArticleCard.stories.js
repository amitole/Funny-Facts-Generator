import ArticleCard from '../components/ArticleCard.vue';

export default {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  argTypes: {
    article: { control: 'object' },
    onClick: { action: 'clicked' }
  }
};

const Template = (args) => ({
  components: { ArticleCard },
  setup() {
    return { args };
  },
  template: '<ArticleCard v-bind="args" @click="args.onClick" />'
});

export const Default = Template.bind({});
Default.args = {
  article: {
    title: 'Sample Article Title',
    category: 'Technology',
    funnyFact: 'This article is so technical, even the computers needed coffee breaks!',
    source: 'Ynet',
    publicationDate: '2024-01-05'
  }
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  article: {
    title: 'This is a very long article title that should wrap to multiple lines and test our component layout',
    category: 'Politics',
    funnyFact: 'Politicians were caught speaking plainly - witnesses still in shock!',
    source: 'Ynet',
    publicationDate: '2024-01-05'
  }
};

export const NoFunnyFact = Template.bind({});
NoFunnyFact.args = {
  article: {
    title: 'Breaking News Article',
    category: 'News',
    funnyFact: '',
    source: 'Ynet',
    publicationDate: '2024-01-05'
  }
};