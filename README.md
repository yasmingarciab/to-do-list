# To-Do List - React + TypeScript + Vite

# Interface Task: pré define o formato de uma task
→ id: número único que identifica a task *(number)*
→ text: descrição da tarefa *(string)*
→ done: se ela está concluída ou não *(boolean)*

# Estados *(forma de guardar dados que muda com o tempo e que afetam a interface do usuário)*:
→ tasks: lista de tarefas (Task[])
→ setTasks: função que atualiza a lista de tarefas
→ newTask: guarda o texto digitado no input
→ setNewTask: função que atualiza o texto do input

# Funções:

→ handleAddTask:
  - Cria uma nova tarefa caso o input não esteja vazio
  - Usa Date.now() como um id único
  - Limpa o input

→ toggleTaskdone
  - Recebe um id
  - Alterna o valor de "done" da tarefa correspondente
  - concluída ↔ não concluída (vem e vai)

# Renderização

1. Título nunca muda
2. Lista das tasks:
   - Se não tiver nenhuma task na lista exibe "No tasks around here..."
   - Se houver renderiza elas em uma lista *(<ul> e <li>)*:
     → Ao clicar na tarefa você altera o valor de "done" dela, pois chama o *toggleTaskdone*. Quando o valor de "done" é true: aplica o estilo *line-through*, que "corta" a task. Você pode alterar novamente o valor clicando novamente.
3. Input + botão:
   - Input é controlado por *newTask*
   - O botão *Add* chama a função *handleNewTask* que adiciona a task na lista.
4. Estilização feita com css básico
