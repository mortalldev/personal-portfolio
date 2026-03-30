// utils/analytics.ts

export const trackEvent = (
    eventName: string,
    eventData?: Record<string, any>
) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventData);
    }
};

// Events:
export const analytics = {
    // Page events
    pageView: (pageName: string) =>
        trackEvent('page_view', { page_title: pageName }),

    // Button clicks
    buttonClick: (buttonName: string) =>
        trackEvent('button_click', { button_name: buttonName }),

    // Form submission
    formSubmit: (formName: string) =>
        trackEvent('form_submit', { form_name: formName }),

    // Download/Link clicks
    linkClick: (url: string) => trackEvent('click', { link_url: url }),

    // Custom events
    projectView: (projectName: string) =>
        trackEvent('project_view', { project_name: projectName }),
    skillView: (skillName: string) =>
        trackEvent('skill_view', { skill_name: skillName }),
};

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}
