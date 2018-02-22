import React, { Component } from 'react'
import { shape, func, string } from 'prop-types' //PropTypes
import { connect } from 'react-redux'
import { sendTypeAction } from '../../actions/actionIndex'
import { getPokeType, getPokemon } from '../../api'
import { Loading } from '../../components/Loading/Loading'
import { Card } from '../../components/Card/Card'

export class PokeContainer extends Component {
  componentDidMount = async () => {
    const pokeType = await getPokeType()
    console.log('pokeType: ', pokeType)

    this.props.sendType(pokeType)
  }

  handleClick = async (id) => {
    const pokeOfType = this.props.pokeType[id -1].pokemon 
    console.log('pokeOfType: ', pokeOfType)
    // const poke = await getPokemon('1')
    // console.log('poke: ', poke)
  }

  generateCards = () => {
    return this.props.pokeType.map(type => {
      return (
        <Card 
          name={type.name}
          id={type.id}
          getPoke={this.handleClick}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <Loading />
        <button onClick={this.handleClick}> Pokemon! </button>
        {
          this.props.pokeType &&
          this.generateCards()
        }
      </div>
    )
  }
}

PokeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func //isRequired
}

export const mapState = state => ({ 
  pokeType: state.type
})

export const mapDispatch = dispatch => ({ 
  sendType: (type) => dispatch(sendTypeAction(type))
})

export default connect(mapState, mapDispatch)(PokeContainer)
