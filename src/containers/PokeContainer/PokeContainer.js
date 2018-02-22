import React, { Component } from 'react'
import { shape, func, string } from 'prop-types' //PropTypes
import { connect } from 'react-redux'
import { sendTypeAction } from '../../actions/actionIndex'
import { getPokeType } from '../../api'
import { Loading } from '../../components/Loading/Loading'

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
        <Loading />
        <button onClick={this.handleClick}> Pokemon! </button>
      </div>
    );
  }
}

PokeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func //isRequired
};

export const mapState = ({ fake }) => ({ fake })

export const mapDispatch = dispatch => ({ 
  sendType: (type) => dispatch(sendTypeAction(type))
})

export default connect(mapState, mapDispatch)(PokeContainer)
