import ArticleCarousel from '../components/ArticlesCarousel.vue';

export default {
  title: 'Components/ArticleCarousel',
  component: ArticleCarousel,
  argTypes: {
    articles: { control: 'object' },
    onSelectArticle: { action: 'articleSelected' }
  },
  decorators: [
    () => ({ template: '<div class="max-w-4xl mx-auto"><story/></div>' })
  ]
};

const Template = (args) => ({
  components: { ArticleCarousel },
  setup() {
    return { args };
  },
  template: '<ArticleCarousel v-bind="args" @select-article="args.onSelectArticle" />'
});

export const WithMultipleArticles = Template.bind({});
WithMultipleArticles.args = {
  articles: [
    {
      title: 'First Article',
      category: 'Tech',
      funnyFact: 'AI attempts humor, humans politely laugh!',
      source: 'Ynet',
      publicationDate: '2024-01-05'
    },
    {
      title: 'Second Article',
      category: 'Sports',
      funnyFact: 'Team celebrates victory before game starts - optimism levels off the charts!',
      source: 'Ynet',
      publicationDate: '2024-01-05'
    },
    {
      title: 'Third Article',
      category: 'Weather',
      funnyFact: 'Weather forecaster predicts "weather" tomorrow - technically not wrong!',
      source: 'Ynet',
      publicationDate: '2024-01-05'
    }
  ]
};

export const SingleArticle = Template.bind({});
SingleArticle.args = {
  articles: [
    {
      title: 'Lonely Article',
      category: 'Entertainment',
      funnyFact: 'Single article seeks companion articles for meaningful carousel relationship',
      source: 'Ynet',
      publicationDate: '2024-01-05'
    }
  ]
};