const getComponents = async () => {
    const { ComponentLoader } = await import('adminjs');
    const componentLoader = new ComponentLoader();

    return {
        Example: componentLoader.add('Example', './components/example.tsx'),
    }
}

export { getComponents };