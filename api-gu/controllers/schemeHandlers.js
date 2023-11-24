// controllers/schemeHandlers.js

const schemes = require("../data/schemes_gu");

const getSchemeById = (id) => {
  const schemeId = parseInt(id);
  const scheme = schemes.find((s) => s.id === schemeId);
  if (scheme) {
    return scheme;
  } else {
    throw new Error("Scheme not found");
  }
};

const getFilteredSchemes = ({ profession, age, gender, searchTerm }) => {
  // Filter schemes based on provided criteria
  return schemes.filter((scheme) => {
    const matchesProfession =
      !profession ||
      scheme.profession.toLowerCase().includes(profession.toLowerCase());
    const matchesAge = !age || scheme.minAge <= parseInt(age);
    const matchesGender =
      !gender || scheme.gender.toLowerCase() === gender.toLowerCase();
    const matchesSearchTerm =
      !searchTerm ||
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase());
    return (
      matchesProfession && matchesAge && matchesGender && matchesSearchTerm
    );
  });
};

const getPopularSchemes = () => {
  return [...schemes]
    .sort((a, b) => b.applications - a.applications)
    .slice(0, 6);
};

const getRecentSchemes = () => {
  return [...schemes]
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .slice(0, 4);
};

module.exports = {
  getSchemeById,
  getFilteredSchemes,
  getPopularSchemes,
  getRecentSchemes,
};
