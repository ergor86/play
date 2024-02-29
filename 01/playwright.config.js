import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
    testDir: 'tests', // Procura os testes no diretório "tests"
    fullyParallel: true, // Roda os testes em paralelo
    forbidOnly: !!process.env.CI, // Falha o build em CI se achar test.only()
    retries: process.env.CI ? 2 : 0, // Re-executa somente em CI
    workers: process.env.CI ? 1 : undefined, // Não executa em paralelo se estiver em CI
    reporter: 'html', // Usa relatórios em HTML
    // Config
    projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
    use: {
      baseURL: 'http://test.marche.dz/', // URL base da aplicação
      trace: 'on-first-retry', // Coleta rastros ao reexecutar um teste que falhou
  },
});