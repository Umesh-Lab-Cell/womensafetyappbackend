const express = require('express');
const router = new express.Router();

//router for defence video
router.get('/defence/video', (req, res) => {
  res.json([
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.youtube.com/watch?v=T7aNSRoDCmg',
    },
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.youtube.com/watch?v=T7aNSRoDCmg',
    },
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.youtube.com/watch?v=T7aNSRoDCmg',
    },
  ]);
});

//router for defence post
router.get('/defence/post', (req, res) => {
  res.json([
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd3cif2hu95s88v.cloudfront.net%2Fblog%2Fwp-content%2Fuploads%2F2020%2F03%2F23095752%2FTips-and-Tricks-for-Self-defence.jpg&imgrefurl=https%3A%2F%2Fwww.myflowertree.com%2Fblog%2Fwhy-self-defence-is-so-important-for-women%2F&tbnid=msQUhNYxA6pa2M&vet=12ahUKEwiW2Pzv6-z0AhXb-TgGHXHtClsQMygAegUIARDFAQ..i&docid=yvRbg9oeOZtz8M&w=885&h=590&itg=1&q=self%20defence%20girl&ved=2ahUKEwiW2Pzv6-z0AhXb-TgGHXHtClsQMygAegUIARDFAQ',
    },
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd3cif2hu95s88v.cloudfront.net%2Fblog%2Fwp-content%2Fuploads%2F2020%2F03%2F23095752%2FTips-and-Tricks-for-Self-defence.jpg&imgrefurl=https%3A%2F%2Fwww.myflowertree.com%2Fblog%2Fwhy-self-defence-is-so-important-for-women%2F&tbnid=msQUhNYxA6pa2M&vet=12ahUKEwiW2Pzv6-z0AhXb-TgGHXHtClsQMygAegUIARDFAQ..i&docid=yvRbg9oeOZtz8M&w=885&h=590&itg=1&q=self%20defence%20girl&ved=2ahUKEwiW2Pzv6-z0AhXb-TgGHXHtClsQMygAegUIARDFAQ',
    },
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd3cif2hu95s88v.cloudfront.net%2Fblog%2Fwp-content%2Fuploads%2F2020%2F03%2F23095752%2FTips-and-Tricks-for-Self-defence.jpg&imgrefurl=https%3A%2F%2Fwww.myflowertree.com%2Fblog%2Fwhy-self-defence-is-so-important-for-women%2F&tbnid=msQUhNYxA6pa2M&vet=12ahUKEwiW2Pzv6-z0AhXb-TgGHXHtClsQMygAegUIARDFAQ..i&docid=yvRbg9oeOZtz8M&w=885&h=590&itg=1&q=self%20defence%20girl&ved=2ahUKEwiW2Pzv6-z0AhXb-TgGHXHtClsQMygAegUIARDFAQ',
    },
  ]);
});

//router for educational video
router.get('/edu/video', (req, res) => {
  res.json([
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.youtube.com/watch?v=pOB08uQzILA',
    },
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.youtube.com/watch?v=pOB08uQzILA',
    },
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.youtube.com/watch?v=pOB08uQzILA',
    },
  ]);
});

//router for educational post
router.get('/edu/post', (req, res) => {
  res.json([
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2019%2F06%2Findia-girls-school-mumbai.jpg&imgrefurl=https%3A%2F%2Ftime.com%2F5614642%2Findia-girls-education%2F&tbnid=UvOP7IVl30mGMM&vet=12ahUKEwjktZzU7Oz0AhUlj9gFHW1RDxMQMygEegUIARDQAQ..i&docid=19toh26UvaBtaM&w=1024&h=686&itg=1&q=girl%20education&ved=2ahUKEwjktZzU7Oz0AhUlj9gFHW1RDxMQMygEegUIARDQAQ',
    },
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2019%2F06%2Findia-girls-school-mumbai.jpg&imgrefurl=https%3A%2F%2Ftime.com%2F5614642%2Findia-girls-education%2F&tbnid=UvOP7IVl30mGMM&vet=12ahUKEwjktZzU7Oz0AhUlj9gFHW1RDxMQMygEegUIARDQAQ..i&docid=19toh26UvaBtaM&w=1024&h=686&itg=1&q=girl%20education&ved=2ahUKEwjktZzU7Oz0AhUlj9gFHW1RDxMQMygEegUIARDQAQ',
    },
    {
      title: 'Title',
      paragaraph:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2019%2F06%2Findia-girls-school-mumbai.jpg&imgrefurl=https%3A%2F%2Ftime.com%2F5614642%2Findia-girls-education%2F&tbnid=UvOP7IVl30mGMM&vet=12ahUKEwjktZzU7Oz0AhUlj9gFHW1RDxMQMygEegUIARDQAQ..i&docid=19toh26UvaBtaM&w=1024&h=686&itg=1&q=girl%20education&ved=2ahUKEwjktZzU7Oz0AhUlj9gFHW1RDxMQMygEegUIARDQAQ',
    },
  ]);
});

//router for educational quiz
router.get('/edu/quiz', (req, res) => {
  res.send('Girl child education quiz');
});

module.exports = router;
