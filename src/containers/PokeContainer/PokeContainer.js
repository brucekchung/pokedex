import React, { Component } from 'react'
import PropTypes, { shape, func, string } from 'prop-types'
import { connect } from 'react-redux'
import { sendTypeAction } from '../../actions/actionIndex'
import { getPokeType } from '../../api'

export class PokeContainer extends Component {
  componentDidMount = async () => {
    const pokeType = await getPokeType()
    console.log('pokeType: ', pokeType)

    this.props.sendType(pokeType)
  }

  handleClick = () => {

    console.log('handleClick')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Pokemon! </button>
      </div>
    );
  }
}

PokeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func //isRequired
};

const mapState = ({ fake }) => ({ fake })

const mapDispatch = dispatch => ({ 
  sendType: (type) => dispatch(sendTypeAction(type))
})

export default connect(mapState, mapDispatch)(PokeContainer)
