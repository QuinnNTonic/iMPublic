const { getJestProjects } = require('@nx/jest');

export default { projects: [...getJestProjects(), '<rootDir>/libs/server/core/shell'] };
