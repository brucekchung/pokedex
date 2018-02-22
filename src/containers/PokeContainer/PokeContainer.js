import React, { Component } from 'react'
import { shape, func, string } from 'prop-types' //PropTypes
import { connect } from 'react-redux'
import { sendTypeAction, sendClickedAction } from '../../actions/actionIndex'
import { getPokeType, getPokemon } from '../../api'
import { Loading } from '../../components/Loading/Loading'
import { Card } from '../../components/Card/Card'
import { Detail } from '../../components/Detail/Detail'
import './PokeContainer.css'

export class PokeContainer extends Component {
  componentDidMount = async () => {
    const pokeType = await getPokeType()
    console.log('pokeType: ', pokeType)

    this.props.sendType(pokeType)
  }

  handleClick = async (id) => {
    const pokeOfType = this.props.pokeType[id -1].pokemon 
    const mappedPoke = pokeOfType.map(poke => getPokemon(poke))
    const pokeData = await Promise.all(mappedPoke)

    console.log('pokeData: ', pokeData)
    this.props.sendClicked(id)
  }

  generateCards = () => {
    return this.props.pokeType.map(type => {
      if (type.id === this.props.clicked) {
        return (
          <Detail />
        )
      } else {
        return (
          <Card 
            name={type.name}
            id={type.id}
            getPoke={this.handleClick}
          />
        )
      }
    })
  }

  render() {
    return (
      <div className="PokeContainer">
        <Loading />
        {
          this.props.pokeType &&
          <div className="pokemon">
            {this.generateCards()}
          </div>
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
  pokeType: state.type,
  clicked: state.clicked,
})

export const mapDispatch = dispatch => ({ 
  sendType: (type) => dispatch(sendTypeAction(type)), 
  sendClicked: (id) => dispatch(sendClickedAction(id)),
})

export default connect(mapState, mapDispatch)(PokeContainer)
