import { useContext } from "react";
import { CyclesContext } from "../../context/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { formatDistanceToNow } from "date-fns/esm";
import fr from "date-fns/locale/fr";

export function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>Mon historique</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tâche</th>
              <th>Durée</th>
              <th>Début</th>
              <th>État</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: fr,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Conclu</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompu</Status>
                    )}

                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <Status statusColor="yellow">En cours</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
