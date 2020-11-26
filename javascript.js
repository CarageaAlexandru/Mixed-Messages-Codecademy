    const productivityQuotes = [
      'Productivity is being able to do things that you were never able to do before.',
      'It’s not always that we need to do more but rather that we need to focus on less.',
      'My goal is no longer to get more done, but rather to have less to do.',
      'You can fool everyone else, but you can’t fool your own mind.',
      'You miss 100% of the shots you don’t take.',
      'Simplicity boils down to two steps: Identify the essential. Eliminate the rest.',
      'Strive not to be a success, but rather to be of value.',
      'Sometimes, things may not go your way, but the effort should be there every single night.',
      'The tragedy in life doesn’t lie in not reaching your goal. The tragedy lies in having no goal to reach.',
      'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.',
      'Real integrity is doing the right thing, knowing that nobody’s going to know whether you did it or not.',
      'The only thing to do with good advice is to pass it on. It is never of any use to oneself.',
      'You see, in life, lots of people know what to do, but few people actually do what they know. Knowing is not enough! You must take action.'
    ];

    function generateNewQuote ( ) {
      let rabdomNB = Math.floor(Math.random() * productivityQuotes.length );
      document.getElementById('displayedMessage').innerHTML = productivityQuotes[rabdomNB];
    }