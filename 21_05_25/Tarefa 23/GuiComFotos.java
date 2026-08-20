import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.File;

public class GuiComFotos extends JFrame {

    private JLabel labelFoto;
    private JButton btnTrocar;
    private String[] imagens = {"foto1.jpg", "foto2.jpg", "foto3.jpg"};
    private int indexAtual = 0;

    public GuiComFotos() {
        setTitle("Interface com Fotos");
        setSize(400, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Label com a primeira imagem
        labelFoto = new JLabel();
        labelFoto.setHorizontalAlignment(JLabel.CENTER);
        carregarImagem(imagens[indexAtual]);

        // Botão para trocar imagem
        btnTrocar = new JButton("Trocar Foto");
        btnTrocar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                indexAtual = (indexAtual + 1) % imagens.length;
                carregarImagem(imagens[indexAtual]);
            }
        });

        // Layout
        setLayout(new BorderLayout());
        add(labelFoto, BorderLayout.CENTER);
        add(btnTrocar, BorderLayout.SOUTH);

        setVisible(true);
    }

    private void carregarImagem(String caminhoImagem) {
        File arquivo = new File(caminhoImagem);
        if (arquivo.exists()) {
            ImageIcon icon = new ImageIcon(caminhoImagem);
            Image imagemRedimensionada = icon.getImage().getScaledInstance(300, 300, Image.SCALE_SMOOTH);
            labelFoto.setIcon(new ImageIcon(imagemRedimensionada));
        } else {
            labelFoto.setText("Imagem não encontrada: " + caminhoImagem);
            labelFoto.setIcon(null);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new GuiComFotos());
    }
}