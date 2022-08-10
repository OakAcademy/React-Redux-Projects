import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteCard, fetchUsers } from '../actions/cardActions';

const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { user } = useParams();
  const card = useSelector((state) => {
    return state.cards.find((card) => card.title === user);
  });
  const { title, body } = card;

  const users = useSelector((state) => {
    return state.users;
  });
  // console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const onButtonClick = () => {
    let id = card.id;
    dispatch(deleteCard(id));
    navigate('/contact');
  };

  return users.map((user) => {
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '80px' }}
        key={user.id}
      >
        <h3 className="ui header">{user.name}</h3>
        <p>{user.email}</p>
        <button
          className="ui primary right floated button"
          onClick={onButtonClick}
        >
          DELETE
        </button>
      </div>
    );
  });
};

export default Card;

///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////

/////// CLASS VERSION (mapStateToProps)
// class Card extends React.Component {
//   // state = { user: '' };

//   // componentDidMount() {
//   //   let user = this.props.match.params.user;
//   //   this.setState({ user });
//   // }

//   render() {
//     // const { user } = this.state;
//     const { title, body } = this.props.card;
//     return (
//       <div
//         className="ui raised very padded text container segment"
//         style={{ marginTop: '80px' }}
//       >
//         <h3 className="ui header">{title}</h3>
//         <p>{body}</p>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   let title = ownProps.match.params.user;
//   return {
//     card: state.cards.find((card) => card.title === title),
//   };
// };

// export default connect(mapStateToProps)(Card);
