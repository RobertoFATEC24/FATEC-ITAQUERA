import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class GuiCombo extends JFrame {

    private JComboBox<String> comboBox;
    private JLabel labelResultado;

    public GuiCombo() {
        setTitle("Exemplo JComboBox");
        setSize(300, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // Centraliza a janela

        // Criar itens para o JComboBox
        String[] opcoes = {"Selecione", "Opção 1", "Opção 2", "Opção 3"};
        comboBox = new JComboBox<>(opcoes);

        // Label para mostrar resultado
        labelResultado = new JLabel("Nenhuma opção selecionada.");

        // Evento de seleção
        comboBox.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String selecionado = (String) comboBox.getSelectedItem();
                if (!selecionado.equals("Selecione")) {
                    labelResultado.setText("Você escolheu: " + selecionado);
                } else {
                    labelResultado.setText("Nenhuma opção selecionada.");
                }
            }
        });

        // Layout
        setLayout(new FlowLayout());
        add(comboBox);
        add(labelResultado);

        setVisible(true);
    }

    // Método principal para execução
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new GuiCombo());
    }
}