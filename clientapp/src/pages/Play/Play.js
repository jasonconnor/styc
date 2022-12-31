import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGameState } from "../../store/reducers/game";
import { GameStates } from "./Helpers/GameStates";
import { 
  ClinicComponent,
  CombatComponent,
  GameOverComponent,
  LoadingComponent,
  MainMenuComponent,
  SelectionComponent,
  ShopComponent
} from "./PlayComponents";
import './play.scss';

/**
 * The play page.
 * @returns The Play JSX component.
 */
const Play = () => {
  const dispatch = useDispatch();
  const gameState = useSelector(state => state.game.State);

  useEffect(() => {
    dispatch(updateGameState(0));
  }, [])

  /**
   * Get the component based on the game state.
   * @returns A JSX Component.
   */
  const getStateComponent = () => {
    if (gameState === null) {
      return <LoadingComponent />;
    }

    switch (gameState) {
      case GameStates.MAINMENU:
        return <MainMenuComponent />;
      case GameStates.SELECTION:
        return <SelectionComponent />;
      case GameStates.COMBAT:
        return <CombatComponent />;
      case GameStates.SHOP:
        return <ShopComponent />;
      case GameStates.CLINIC:
        return <ClinicComponent />;
      case GameStates.GAMEOVER:
        return <GameOverComponent />;
    }
  }

  return (<div className='play-page-container'>
    {getStateComponent()}
  </div>)
}

export default Play