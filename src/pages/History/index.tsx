import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
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
            <tr>
              <td>Tâche</td>
              <td>20 minutes</td>
              <td>ha dois meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tâche</td>
              <td>20 minutes</td>
              <td>ha dois meses</td>
              <td>
                <Status statusColor="red">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tâche</td>
              <td>20 minutes</td>
              <td>ha dois meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tâche</td>
              <td>20 minutes</td>
              <td>ha dois meses</td>
              <td>
                <Status statusColor="yellow">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tâche</td>
              <td>20 minutes</td>
              <td>ha dois meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tâche</td>
              <td>20 minutes</td>
              <td>ha dois meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tâche</td>
              <td>20 minutes</td>
              <td>ha dois meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
