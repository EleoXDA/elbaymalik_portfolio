import React from 'react';

const Statcounter = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          var sc_project=12894132; 
          var sc_invisible=1; 
          var sc_security="907cba20"; 
        `,
      }}
    />
    <script
      src="https://www.statcounter.com/counter/counter.js"
      async
    ></script>
    <noscript>
      <div className="statcounter">
        <a
          title="Web Analytics"
          href="https://statcounter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="statcounter"
            src="https://c.statcounter.com/12894132/0/907cba20/1/"
            alt="Web Analytics"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      </div>
    </noscript>
  </>
);

export default Statcounter;
