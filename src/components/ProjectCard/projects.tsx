import React from 'react';

const projects = [
  {
    imageURL: '/images/projects/ThreeFundRebalance.png',
    imageAlt: 'Three-Fund Rebalance',
    title: 'Three-Fund Rebalance',
    date: 'August 2026 - September 2026',
    text: (
      <span>
        An interactive CLI that computes trades to rebalance a three-fund portfolio across multiple
        accounts.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/three-fund-rebalance',
    technologies: <span>Python, SciPy</span>,
  },
  {
    imageURL: '/images/projects/ImprovingAAVESpeechToText.png',
    imageAlt: 'Improving AAVE Speech-to-Text',
    title: 'Improving AAVE Speech-to-Text',
    date: 'October 2024 - December 2024',
    text: (
      <span>A fine-tuned OpenAI Whisper model that enhances speech-to-text for AAVE speakers.</span>
    ),
    codeURL: 'https://github.com/melvinrajendran/improving-aave-speech-to-text',
    technologies: (
      <span>
        Python, PyTorch,{' '}
        <a
          href="https://github.com/openai/whisper"
          className="link-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whisper
        </a>
      </span>
    ),
  },
  {
    imageURL: '/images/projects/BitTorrentClient.png',
    imageAlt: 'BitTorrent Client',
    title: 'BitTorrent Client',
    date: 'December 2023 - January 2024',
    text: (
      <span>
        A full-featured BitTorrent v1.0 client with support for downloading and uploading files.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/bittorrent-client',
    technologies: (
      <span>
        Go,{' '}
        <a
          href="https://github.com/marksamman/bencode"
          className="link-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bencode
        </a>
      </span>
    ),
  },
  {
    imageURL: '/images/projects/SP500StockPriceAnalysis.png',
    imageAlt: 'S&P 500 Stock Price Analysis',
    projectURL: 'https://melvinrajendran.github.io/SP500-Stock-Price-Analysis/',
    title: 'S&P 500 Stock Price Analysis',
    date: 'May 2023',
    text: (
      <span>
        A data science tutorial analyzing stocks in the S&P 500. Uses LSTM modeling to predict stock
        prices.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/sp500-stock-price-analysis',
    technologies: <span>Python, Keras, Scikit-Learn</span>,
  },
  {
    imageURL: '/images/projects/TweetsAndTeslaCancellations.png',
    imageAlt: 'Tweets and Tesla Cancellations',
    title: 'Tweets and Tesla Cancellations',
    date: 'March 2023',
    text: (
      <span>
        A Jupyter notebook analyzing how Elon Musk&apos;s tweets correlate with Tesla order
        cancellation.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/tweets-and-tesla-cancellations',
    technologies: <span>Python, NLTK</span>,
  },
  {
    imageURL: '/images/projects/Convertify.png',
    imageAlt: 'Convertify',
    projectURL: 'https://convertify.onrender.com',
    title: 'Convertify',
    date: 'December 2022 - January 2023',
    text: (
      <span>
        A web application that enables Spotify users to quickly convert their playlists between
        explicit and clean.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/convertify',
    technologies: (
      <span>
        React,{' '}
        <a
          href="https://developer.spotify.com/documentation/web-api/"
          className="link-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify Web API
        </a>
      </span>
    ),
  },
];

export default projects;
