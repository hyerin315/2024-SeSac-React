const Nav = (props) => {
  //console.log(props.topic)
  const lists = [];
  for (let i = 0; i < props.topics.length; i++) {
    let topic = props.topics[i];
    lists.push(<li key={topic.id}><a href={'/read/' + topic.id}>{topic.title}</a></li>);
  }
  return (
    <>
      <nav>
        <ol>
          {lists}
        </ol>
      </nav>
    </>
  );
};

export default Nav;