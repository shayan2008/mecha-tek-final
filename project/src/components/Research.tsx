import React from 'react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Research</h2>

        <div className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-cyan-400">Optimizing the 200m Freestyle (Long Course) with Calculus and Performance Modeling</h3>

          <div className="space-y-6 text-slate-300">
            <div>
              <h4 className="text-2xl font-semibold mb-2 text-white">Introduction</h4>
              <p>The 200-meter freestyle (long course) is a highly strategic swimming event, combining sprint elements with middle-distance endurance. Elite swimmers must balance explosive speed with efficient energy use over four lengths of a 50m pool. Key performance factors include the start and turn underwaters, stroke rate vs. stroke length, and pacing strategy across the race. In this report, we conduct an in-depth analysis of the 200m freestyle using principles of calculus and optimization. We will model how small changes in technique or strategy (e.g. underwater distance off each wall, stroke cadence, pacing profiles) can impact overall time, and identify optimal values for these variables. Our target audience is technically educated coaches, swimmers, and sport scientists – we assume familiarity with calculus and competitive swimming terminology. The goal is to provide a comprehensive, evidence-backed exploration of how to mathematically model and optimize a 200m freestyle race for an elite male swimmer (though many principles apply to females as well).</p>
              <p>We draw on fluid dynamics, physiology, and race data to illustrate how calculus-based reasoning (e.g. taking derivatives to find optima) helps in understanding optimal pacing and technique adjustments. Where possible, real examples of elite swimmers’ strategies and performances are cited to ground the discussion. Visual graphs are included to illustrate concepts like the optimal underwater distance and stroke rate trade-offs. Ultimately, an “optimal” 200m freestyle race minimizes total time while respecting human physiological limits. By the end of this report, we will have: (1) identified the major factors influencing a 200m free performance, (2) formulated mathematical models for these factors, (3) applied calculus (e.g. differentiation and even some calculus of variations) to find optimal strategies, and (4) compared these predictions with actual elite swimmer data and race analyses.</p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-2 text-white">Physics of Swimming: Drag, Power, and Velocity Optimization</h4>
              <p>Swimming performance is heavily constrained by hydrodynamics. The resistive drag force a swimmer experiences is roughly proportional to the square of velocity ( F_drag ∝ v^2 ), and the power required to overcome drag scales as the cube of velocity ( P ∝ v^3 ). This cubic relationship means that small increases in speed demand disproportionately larger energy expenditure. For a fixed amount of energy, a swimmer cannot simply double speed for half the time – the energy cost would more than triple. From an optimization perspective, this suggests that an even pace (keeping velocity as constant as possible) is the most energy-efficient way to cover a given distance in minimal time. Any wild fluctuations – especially spurts of very high speed – cause a spike in drag force and waste energy that leads to early fatigue.</p>
              <p>Using calculus of variations, one can formalize this principle: consider the problem of minimizing the total race time T = ∫[0,L] dx/v(x) for a 200m race (where v(x) is the swimmer’s velocity as a function of distance) given a fixed total energy E. The energy expended can be modeled as E = ∫[0,L] c*v(x)^2 dx (assuming power P = c*v^3 and dx/v = dt, so P*dt = c*v^3 * dx/v = c*v^2 dx). Using a Lagrange multiplier to account for the energy constraint, we minimize the functional ∫[0,L] (1/v + λ*v^2) dx. Taking the variation with respect to v(x) and setting the derivative to zero yields -v^-2 + 2λv = 0, which implies v^3 = 1/(2λ) = constant. In other words, the optimal solution is a constant velocity throughout the race if the swimmer could distribute energy freely. This mathematical result underpins why an “even pace” is optimal from a physics standpoint. Deviating from even pace (e.g. going out very fast then slowing down) uses energy inefficiently because the early high-velocity surge incurs a large drag penalty.</p>
              <p>In practice, fatigue and physiology complicate the picture – humans cannot simply maintain a perfectly constant speed due to finite anaerobic capacity, V̇O₂ kinetics, and muscle fatigue. Nonetheless, modeling shows that an “almost even” pacing strategy is ideal for 200m races across all strokes. Coaches often encourage swimmers to avoid excessive front-loading (going out too fast) because the time “gained” in the first half can be outweighed by time lost in the second half due to fatigue and form deterioration. Water’s resistance punishes the overly ambitious start: as one sports science thesis notes, maintaining an even pace is not only energetically efficient but crucial for best performance in a 200m, given the drag–velocity cubic law.</p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-2 text-white">Pacing Strategy in the 200m Freestyle</h4>
              <p>The 200m freestyle (LC) consists of four lengths of the pool (4 × 50m), with three turns. A race typically lasts on the order of ~1 minute 42 seconds to ~1 minute 50 seconds for elite male swimmers, depending on skill level. How the swimmer distributes effort and speed over these four laps is a defining pacing strategy. There are a few common pacing profiles in 200m races:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-cyan-400">Even pace</strong> – each 50m split is nearly the same time. This is theoretically ideal but hard to achieve fully due to the dive and fatigue.</li>
                <li><strong className="text-cyan-400">Positive split</strong> – the swimmer goes out faster in the first half and slows in the second half. Many 200m swimmers exhibit a mild positive split (the first 100m slightly faster than the second). This often happens naturally as fatigue sets in despite the swimmer’s best intentions to hold speed.</li>
                <li><strong className="text-cyan-400">Negative split</strong> – a rarer strategy in 200m free where the second half is faster than the first. This requires exceptional control and endurance; even splits or slight positive splits are more common among world-class swims.</li>
                <li><strong className="text-cyan-400">“Fast-start, even”</strong> – a hybrid observed in elite racing: a quick initial acceleration off the blocks, then settling into an even middle pace, and sometimes a final burst if energy reserves allow. In fact, analysis of 200m finals at World Championships found that most medalists execute a fast start followed by a relatively even pace through the middle 100m.</li>
              </ul>
            </div>

            {/* Other sections would continue here... */}

            <div className="mt-8 pt-6 border-t border-slate-700">
              <h4 className="text-2xl font-semibold mb-4 text-white">Access the Full Research & Interactive Tool</h4>
              <p className="mb-4">
                The complete research paper is available for download. Additionally, an interactive web application built with Streamlit is available in the project's GitHub repository. This tool allows you to run your own simulations and analyses based on the models discussed in the paper.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/shayan2008/Calculus-Optimization-of-200-Free"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300 text-center"
                >
                  View on GitHub
                </a>
                <a
                  href="/200m_freestyle_calculus_optimization_report.pdf"
                  download
                  className="inline-block bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors duration-300 text-center"
                >
                  Download Full Research (PDF)
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-2xl font-semibold mb-2 text-white">References</h4>
              <ul className="list-disc list-inside space-y-2 pl-4 text-sm">
                <li>McGibbon, K. (2020). Achieving marginal gains: perfecting the pacing strategies of Australian swimmers. (PhD Thesis). – Discusses pacing and notes even pacing is optimal due to cubic drag relationship.</li>
                <li>Veiga, S., & Roig, A. (2016). “Underwater and surface strategies of 200 m world level swimmers.” J. Sports Sci., 34(8), 766–771. – Provides data on 200m free splits, showing ~6-8% drop in free swim velocity, smaller drop in underwater performance.</li>
                <li>Pla, R. et al. (2021). “Underwater and Surface Swimming Parameters Reflect Performance Level in Elite Swimmers.” Front. Physiol. 12:712652. – Emphasizes importance of underwater distance/time, citing that longer underwater phases correlate with better 200m outcomes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;