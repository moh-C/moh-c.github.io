/**
 * Portfolio Application - Main JavaScript
 * Handles dynamic content loading, navigation, and interactive features
 */

// Utility Functions
const Utils = {
  /**
   * Updates the copyright year in the footer
   */
  updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  },

  /**
   * Hides links with no valid URL
   * Removes links with empty href, "#", or undefined values
   */
  hideInvalidLinks() {
    const links = document.querySelectorAll('.project-links a, .publication-links a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.trim() === '') {
        link.style.display = 'none';
      }
    });
  },

  /**
   * Initializes smooth scrolling for internal anchor links
   */
  initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },

  /**
   * Fetches JSON data from a file
   * @param {string} url - The URL of the JSON file
   * @returns {Promise<Object>} - The parsed JSON data
   */
  async fetchJSON(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      return null;
    }
  }
};

// Projects Module
const Projects = {
  /**
   * Renders a project card for the home page
   * @param {Object} project - The project data
   * @returns {string} - HTML string for the project card
   */
  renderCard(project) {
    const linkEntries = Object.entries(project.links);
    const linksHTML = linkEntries.map(([key, url]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      return `<a href="${url}" target="_blank">${label}</a>`;
    }).join('\n                        ');

    return `
                <div class="project-card">
                    <div class="card-number">${project.number}</div>
                    <h3>${project.title}</h3>
                    <p>${project.shortDescription}</p>
                    <div class="project-links">
                        ${linksHTML}
                    </div>
                </div>`;
  },

  /**
   * Renders a detailed project section for the projects page
   * @param {Object} project - The project data
   * @returns {string} - HTML string for the detailed project
   */
  renderDetailed(project) {
    const detailsHTML = project.details.map(detail => `<li>${detail}</li>`).join('\n                    ');
    const techHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('\n                    ');
    const linkEntries = Object.entries(project.links);
    const linksHTML = linkEntries.map(([key, url]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      return `<a href="${url}" target="_blank">${label}</a>`;
    }).join('\n                    ');

    return `
            <div class="project-detailed" id="${project.id}">
                <div class="project-number">${project.number}</div>
                <h2>${project.title}</h2>
                <div class="project-meta">
                    <span class="project-venue">${project.venue}</span>
                    <span class="project-date">${project.date}</span>
                </div>
                <p class="project-description">${project.fullDescription}</p>
                
                <h3>Technical Details</h3>
                <ul>
                    ${detailsHTML}
                </ul>

                <h3>Technologies</h3>
                <div class="tech-stack">
                    ${techHTML}
                </div>

                <div class="project-links">
                    ${linksHTML}
                </div>
            </div>`;
  },

  /**
   * Loads and displays projects on the home page
   */
  async loadHomeProjects() {
    const container = document.querySelector('.projects-grid');
    if (!container) return;

    const data = await Utils.fetchJSON('data/projects.json');
    if (!data || !data.projects) return;

    container.innerHTML = data.projects.map(project => this.renderCard(project)).join('\n');
    Utils.hideInvalidLinks();
  },

  /**
   * Loads and displays detailed projects on the projects page
   */
  async loadDetailedProjects() {
    const container = document.querySelector('.projects-grid-detailed');
    if (!container) return;

    const data = await Utils.fetchJSON('data/projects.json');
    if (!data || !data.projects) return;

    container.innerHTML = data.projects.map(project => this.renderDetailed(project)).join('\n');
    Utils.hideInvalidLinks();
  }
};

// Publications Module
const Publications = {
  /**
   * Renders a publication card for the home page
   * @param {Object} pub - The publication data
   * @returns {string} - HTML string for the publication card
   */
  renderCard(pub) {
    const linkEntries = Object.entries(pub.links);
    const linksHTML = linkEntries.map(([key, url]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      return `<a href="${url}" target="_blank">${label}</a>`;
    }).join('\n                        ');

    return `
                <div class="publication-card">
                    <div class="card-number">${pub.number}</div>
                    <h3>${pub.title}</h3>
                    <p class="publication-venue">${pub.venue}</p>
                    <p>${pub.abstract}</p>
                    <div class="publication-links">
                        ${linksHTML}
                    </div>
                </div>`;
  },

  /**
   * Renders a detailed publication section for the publications page
   * @param {Object} pub - The publication data
   * @returns {string} - HTML string for the detailed publication
   */
  renderDetailed(pub) {
    const linkEntries = Object.entries(pub.links);
    const linksHTML = linkEntries.map(([key, url]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      return `<a href="${url}" target="_blank">${label}</a>`;
    }).join('\n                    ');

    return `
            <div class="publication-detailed" id="${pub.id}">
                <div class="publication-number">${pub.number}</div>
                <h2>${pub.title}</h2>
                <div class="publication-meta">
                    <span class="publication-venue">${pub.venue}</span>
                    <span class="publication-date">${pub.date}</span>
                    <span class="publication-authors">${pub.authors}</span>
                </div>
                <p class="publication-abstract">${pub.abstract}</p>

                <div class="publication-links">
                    ${linksHTML}
                </div>
            </div>`;
  },

  /**
   * Loads and displays publications on the home page
   */
  async loadHomePublications() {
    const container = document.querySelector('.publications-grid');
    if (!container) return;

    const data = await Utils.fetchJSON('data/publications.json');
    if (!data || !data.publications) return;

    container.innerHTML = data.publications.map(pub => this.renderCard(pub)).join('\n');
    Utils.hideInvalidLinks();
  },

  /**
   * Loads and displays detailed publications on the publications page
   */
  async loadDetailedPublications() {
    const container = document.querySelector('.publications-grid-detailed');
    if (!container) return;

    const data = await Utils.fetchJSON('data/publications.json');
    if (!data || !data.publications) return;

    container.innerHTML = data.publications.map(pub => this.renderDetailed(pub)).join('\n');
    Utils.hideInvalidLinks();
  }
};

// Main Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Always run these utilities
  Utils.updateCopyrightYear();
  Utils.initSmoothScrolling();

  // Load content based on current page
  if (document.querySelector('.projects-grid')) {
    Projects.loadHomeProjects();
  }

  if (document.querySelector('.publications-grid')) {
    Publications.loadHomePublications();
  }

  if (document.querySelector('.projects-grid-detailed')) {
    Projects.loadDetailedProjects();
  }

  if (document.querySelector('.publications-grid-detailed')) {
    Publications.loadDetailedPublications();
  }
});
