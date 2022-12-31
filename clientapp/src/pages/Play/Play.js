import { useSelector } from "react-redux";
import { GameStates } from "./Helpers/GameStates";
import { 
  ClinicComponent,
  CombatComponent,
  ErrorStateComponent,
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
  const gameState = useSelector(state => state.game.State);

  /**
   * Get the component based on the game state.
   * @returns A JSX Component.
   */
  const getStateComponent = () => {
    if (!gameState) {
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
      case GameStates.ERROR_GENERIC:
      default:
        return <ErrorStateComponent />;
    }
  }

  return (<div className='play-page-container'>
    {getStateComponent()}
  </div>)
}

export default Play