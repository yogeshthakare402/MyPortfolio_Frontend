import type { ExperienceItem } from '@/data/portfolio-data';

type ExperienceProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceProps) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.company}-${item.period}`} className="timeline-item glass-card">
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-content">
            <p className="timeline-period">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="timeline-company">{item.company}</p>
            <p>{item.summary}</p>
            <div className="tag-row">
              {item.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
