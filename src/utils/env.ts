type EnvVariable = {
  key: string;
  required: boolean;
  defaultValue?: string;
};

export const requiredEnvVariables: EnvVariable[] = [
  { key: 'VITE_API_URL', required: true },
];

export const validateEnv = (): void => {
  const missingVars: string[] = [];

  requiredEnvVariables.forEach((envVar) => {
    const value = import.meta.env[envVar.key];

    if (envVar.required && (value === undefined || value === '')) {
      missingVars.push(envVar.key);
    }
  });

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}.
      Please check your .env file or environment configuration.`,
    );
  }
};

export const getEnvVariable = (
  key: string,
  defaultValue: string = '',
): string => {
  return (import.meta.env[key] as string) || defaultValue;
};

export const env = {
  apiUrl: (): string => getEnvVariable('VITE_API_URL'),
};

if (import.meta.env.DEV) {
  validateEnv();
}
