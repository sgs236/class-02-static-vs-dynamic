const h1 = React.createElement('h1', null, 'Page B');
const p = React.createElement('p', null, 'Is this page static, client-side rendered, or server-side rendered? (Replace TODO with your answer.)');
const p_date = React.createElement('p', null, new Date().toString());
const h2 = React.createElement('h2', null, 'Answer: TODO');

ReactDOM.render([h1, p, p_date, h2], document.body);
