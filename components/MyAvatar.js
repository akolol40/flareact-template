import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { srv } from './../Config'

const styles = theme => ({
  smallAvatar: {
    color: '#fff',
    fontSize: 12,
    width: 28,
    height: 28,
  },
  bigAvatar: {
    border: '1px solid #fff',
    margin: 'auto',
    color: '#fff',
    width: 50,
    height: 50,
    // borderRadius: '45%'
  },
  hugeAvatar: {
    margin: 'auto',
    color: '#fff',
    width: 75,
    height: 75,
    // borderRadius: '45%'
  },
});

class MyAvatar extends React.Component {
  state = {
    user: null,
    color: '#d9ce56',
    link: '/api/users/photo/',
    refresh: false,
  }

  componentDidMount() {
    if (this.props.user || this.props.own) {
      var user = this.props.user
      if (this.props.own && auth.isAuthenticated().user)
        user = auth.isAuthenticated().user
      this.setState({ user: user })
      this.prep(user)
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.own !== this.props.own) {
      this.setState({ user: auth.isAuthenticated().user })
      this.prep(auth.isAuthenticated().user)
    }
    if(prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user })
      this.prep(this.props.user)
    }
  }

  prep(user) {
    var avatar_name = '';
    if (user.name && user.avtr != 1) {
      let letters = user.name.replace(/[&\/\\#«»,+()$~%.'":*?<>{}]/g, '').toUpperCase().split(' ');
      avatar_name = letters[0].slice(0, 1);
      if (letters.length > 1)
        avatar_name += letters[1].slice(0, 1);
    }
    if (this.props.org || user.org) 
      this.setState({ link: '/api/orgs/photo/', color: '#a695e7' })
    if (this.props.org === 2 || user.org === 2) 
      this.setState({ link: '/api/orgs/photo/', color: '#c770a0' })
    if (!this.props.org && !user.org) 
      this.setState({ link: '/api/users/photo/', color: '#d9ce56' })
    if (this.props.whiteBorder) 
      this.setState({ color: '#fff' })
    if (auth.isAuthenticated() && user._id === auth.isAuthenticated().user._id)
      this.setState({ color: '#afc429' })
    if (user.avtr && user.avtr.toString().includes('#'))
      this.setState({ color: user.avtr })
    this.setState({ avatar_name: avatar_name })
  }

  render() {
    const { user, link, avatar_name } = this.state;
    const { classes, huge, large, small } = this.props;

    if (user) {
      if (this.props.fresh) {
        return (<Avatar alt={user.name} src={this.props.fresh}
          className={large ? classes.bigAvatar : 
            (huge ? classes.hugeAvatar : (small && classes.smallAvatar))}
          style={{ border: '0px solid ' + this.state.color }} />);
      } else if (user.photo || parseInt(user.avtr) === 1) {
        return (<Avatar alt={user.name} src={srv + link + user._id}
          className={large ? classes.bigAvatar : 
            (huge ? classes.hugeAvatar : (small && classes.smallAvatar))}
          style={{ border: '0px solid ' + this.state.color }} />);
      } else {
        return (<Avatar alt={user.name} className={large ? classes.bigAvatar : 
            (huge ? classes.hugeAvatar : (small && classes.smallAvatar))}
          style={{ backgroundColor: this.state.color || '#d9ce56' }}>{avatar_name}</Avatar>);
      }
    } else return false;
  }
}

MyAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAvatar);